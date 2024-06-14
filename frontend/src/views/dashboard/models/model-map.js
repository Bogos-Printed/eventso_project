import viewModels from './model-content';

export default (models) => (`
  ${models.map((data) => viewModels(data)).join('')}
`);
