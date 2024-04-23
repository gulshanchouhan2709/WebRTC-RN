import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { socket, PeerConnection } from 'utils';
import MainWindow from './childs/MainWindow';
import CallWindow from './childs/CallWindow';
import CallModal from './childs/CallModal';

const VideoAudioCalling = (props) => {
  const [state, setState] = useState({
    callWindow: '',
    callModal: '',
    callFrom: '',
    localSrc: null,
    peerSrc: null
  });

  const [pc, setPC] = useState({});
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const onRequest = ({ from: callFrom }) => setState({ ...state, callModal: 'active', callFrom });
    const onCall = data => {
      if (data.sdp) {
        pc.setRemoteDescription(data.sdp);
        if (data.sdp.type === 'offer') pc.createAnswer();
      } else pc.addIceCandidate(data.candidate);
    };
    const onEnd = () => endCallHandler();

    socket.on('request', onRequest);
    socket.on('call', onCall);
    socket.on('end', onEnd);
    socket.emit('init');

    return () => {
      socket.off('request', onRequest);
      socket.off('call', onCall);
      socket.off('end', onEnd);
    };
  }, [pc, state]);

  const startCallHandler = (isCaller, friendID, config) => {
    setConfig(config);
    const newPC = new PeerConnection(friendID)
      .on('localStream', src => {
        const newState = { ...state, callWindow: 'active', localSrc: src };
        if (!isCaller) newState.callModal = '';
        setState(newState);
      })
      .on('peerStream', src => setState({ ...state, peerSrc: src }))
      .start(isCaller);

    setPC(newPC);

    return () => {
      if (_.isFunction(newPC.stop)) {
        newPC.stop(isCaller);
      }
      setPC({});
      setConfig(null);
      setState({
        callWindow: '',
        callModal: '',
        localSrc: null,
        peerSrc: null
      });
    };
  };

  const rejectCallHandler = () => {
    socket.emit('end', { to: state.callFrom });
    setState({ ...state, callModal: '' });
  };

  const endCallHandler = isStarter => {
    if (_.isFunction(pc.stop)) {
      pc.stop(isStarter);
    }
    setPC({});
    setConfig(null);
    setState({
      callWindow: '',
      callModal: '',
      localSrc: null,
      peerSrc: null
    });
  };

  return (
    <div>
      <MainWindow startCall={startCallHandler} />
      {!_.isEmpty(config) && (
        <CallWindow
          status={state.callWindow}
          localSrc={state.localSrc}
          peerSrc={state.peerSrc}
          config={config}
          mediaDevice={pc.mediaDevice}
          endCall={endCallHandler}
        />
      )}
      <CallModal
        status={state.callModal}
        startCall={startCallHandler}
        rejectCall={rejectCallHandler}
        callFrom={state.callFrom}
      />
    </div>
  );
};

export default VideoAudioCalling;
