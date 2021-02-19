import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';
import {fetchItems} from '../actions';

class Twitters extends Component {

  componentDidMount() {
  this.props.fetchTwitters();
  }

  render() {
    const {twitters} = this.props;
    return(
      <GridTemplate>
      {twitters.map(({ _id: id, title, content, twitterName, created }) => (
          <Card
            id={id}
            title={title}
            content={content}
            twitterName={twitterName}

            key={id}
          />
        ))}
  </GridTemplate>
    )
  }

}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
  })),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = dispatch =>({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
})

export default connect(mapStateToProps,mapDispatchToProps)(Twitters);
