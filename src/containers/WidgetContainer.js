import { connect } from 'react-redux'
import { toggleWidget } from '../actions'
import Widget from '../components/Widget'

const mapStateToProps = (state, ownProps) => {
  return {
    minimized: state.minimized
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggle: () => {
      dispatch(toggleWidget())
    }
  }
}

const WidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget)

export default WidgetContainer
