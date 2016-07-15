import chai from 'chai';
import ByoReact from '../../src/bring-your-own-react';
import ByoReactDOM from '../../src/bring-your-own-react-dom';

chai.should();

class TestChild extends ByoReact.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class TestParent extends ByoReact.Component {
  render() {
    return (<div>
      <TestChild name={'world'} />
    </div>);
  }
}

describe('Rendering', () => {
  describe('should output component properties', () => {
    it('should render <TestChild name={\'world\'}/> as HTMLDivElement', () => {
      const component = <TestChild name={'world'} />;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div>Hello world</div>');
    });

    it.skip('should render <TestParent /> as HTMLDivElement', () => {
      const component = <TestParent />;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div><div>Hello world</div></div>');
    });
  });


  describe.skip('should output markup properties', () => {
    it('should render <div id="42">Hello</div> as HTMLDivElement', () => {
      const component = <div id="42">Hello</div>;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div id="42">Hello</div>');
    });

    it('should render <div id={42}>Hello</div> as HTMLDivElement', () => {
      const component = <div id={42}>Hello</div>;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div id="42">Hello</div>');
    });

    it('should render className as class', () => {
      const component = <div className="a">Hello</div>;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div class="a">Hello</div>');
    });

    it('should render htmlFor as for', () => {
      const component = <div><label htmlFor="a">Hello</label><input name="a" /></div>;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div><label for="a">Hello</label><input name="a"></div>');
    });
  });
});
