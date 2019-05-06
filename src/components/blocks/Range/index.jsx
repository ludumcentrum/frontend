import * as React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './styles.scss';

type Props = {
  min: number,
  max: number,
};

type State = {
  value: number,
};

class Range extends React.Component<Props, State> {
  state = {
    value: 1,
  };

  render() {
    const { min, max } = this.props;
    const { value } = this.state;

    return (
      <div className="Range">
        <InputRange
          minValue={min}
          maxValue={max}
          value={value}
          onChange={newValue => this.setState({ value: newValue })}
          className="Range__input"
        />
      </div>
    );
  }
}

export default Range;
