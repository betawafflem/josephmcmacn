/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const AdCreative = bizSdk.AdCreative;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<AD_ACCOUNT_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'image_hash' : '<imageHash>',
  'object_story_spec' : {'page_id':'<pageID>','link_data':{'image_hash':'<imageHash>','link':'<canvasURI>','name':'Creative message','call_to_action':{'type':'LEARN_MORE'}}},
};
const adcreatives = (new AdAccount(id)).createAdCreative(
  fields,
  params
);
logApiCallResult('adcreatives api call complete.', adcreatives);