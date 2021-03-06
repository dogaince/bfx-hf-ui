import PropTypes from 'prop-types'

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  actions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  label: PropTypes.string,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
}

export const defaultProps = {
  className: '',
}
