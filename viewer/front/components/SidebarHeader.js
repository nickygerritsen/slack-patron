import React from 'react';
import { connect } from 'react-redux'

class SidebarHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="sidebar-header">
          <div className="team-info">
            <span className="team-name">{this.props.teamInfo.name}</span>
            <p className="configure-toggler"></p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teamInfo: state.teamInfo
  };
};

export default connect(mapStateToProps)(SidebarHeader);
