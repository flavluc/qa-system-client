import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postResposta } from '../redux/respostas.redux';
import { getSession } from '../redux/sessions.redux';
import Question from '../components/Question';
import TextBox from '../components/TextBox';
import Answers from '../components/Answers';

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.postResposta = this.postAnswer.bind(this);
  }

  postAnswer(text) {
    if (this.props.session) {
      let resposta = {
        descricao: text,
        upvotes: 0,
        downvotes: 0,
        usuarioId: this.props.session.usuarioId,
        perguntaId: this.props.id,
      };

      this.props.postResposta(resposta, { perguntaId: resposta.perguntaId });
    }
  }

  render() {
    return (
      <div>
        <Question id={this.props.id} />
        <div className="pb-4" />
        <h2 style={{ color: 'gray' }}>Respostas:</h2>
        <Answers perguntaId={this.props.id} />
        <TextBox buttonMessage="Responder!" onSubmit={state => this.postAnswer(state.text)} />
      </div>
    );
  }
}

QuestionPage.propTypes = {
  id: PropTypes.string,
  postResposta: PropTypes.func,
  session: PropTypes.object,
};

export default connect(
  state => {
    return { session: getSession(state) };
  },
  { postResposta }
)(QuestionPage);
