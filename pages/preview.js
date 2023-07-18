import { WordPressTemplate } from '@faustwp/core';

export default function Preview(props) {
  console.log('props', props)
  return <WordPressTemplate {...props} />;
}
