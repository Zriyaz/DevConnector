import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';

function ProfileGithub({ username, getGithubRepos, repos }) {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return <div></div>;
}

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func,
  repos: PropTypes.array,
  username: PropTypes.string,
};
const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
