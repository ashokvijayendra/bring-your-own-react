import ReactCompositeComponentWrapper from './byo-react-composite-component';
import ReactHostComponent from './byo-react-host-component';

function instantiateReactComponent(node) {
  let instance;
  const element = node;
  if (typeof element.type === 'string') {
    instance = ReactHostComponent.createInternalComponent(element);
  } else if (typeof node === 'string') {
    instance = ReactHostComponent.createInstanceForText(node);
  } else {
    instance = new ReactCompositeComponentWrapper(element);
  }

  return instance;
}

export default instantiateReactComponent;
