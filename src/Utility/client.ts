import { IContentItem, Elements, createDeliveryClient, camelCasePropertyNameResolver,
    DeliveryClient, } from '@kontent-ai/delivery-sdk';

const projectId = process.env.REACT_APP_PROJECT_ID || '';
const previewApiKey = process.env.REACT_APP_PREVIEW_API_KEY || '';

let Client = new DeliveryClient(
    {
    projectId: projectId,
    previewApiKey: previewApiKey
})

export { Client }