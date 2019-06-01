import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './ProfilePicture';
import { loadUsuario, getUsuario } from '../redux/usuarios.redux';
import { connect } from 'react-redux';

class ProfilePicture extends Component {
  componentDidMount() {
    this.props.loadUsuario({ id: this.props.usuarioId });
  }

  render() {
    if (!this.props.usuario) {
      return 'Carregando...';
    }
    return <Image style={this.props.style} id={this.props.usuario.imagemId} />;
  }
}

ProfilePicture.propTypes = {
  style: PropTypes.object,
  usuario: PropTypes.object,
  usuarioId: PropTypes.string,
  loadUsuario: PropTypes.func,
};

export default connect(
  (state, ownProps) => {
    return { usuario: getUsuario(state, ownProps.usuarioId) };
  },
  { loadUsuario }
)(ProfilePicture);
