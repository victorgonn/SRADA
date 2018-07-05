import _ from "lodash";

export default class RequestManager {

  constructor(options = {}) {
    this.options = options;
    this.pendingRequests = {};
  }

  addRequest(requestId, cancelFn) {

    this.log(`adicionando \`${requestId}\``);

    const page = requestId.split(":::")[0];

    if (this.hasPage(page)) {
      this.log(`incrementando requisições \`${requestId}\``);
      this.pendingRequests[page].push({cancelFn: cancelFn, id: requestId});
    } else {
      this.log(`nova requisição \`${requestId}\``);
      this.pendingRequests[page] = [{cancelFn: cancelFn, id: requestId}];
    }
  }

  removeRequest(requestId) {
    this.log(`removing request \`${requestId}\``);
    const page = requestId.split(":::")[0];
    _.remove(this.pendingRequests[page], {id: requestId});
  }

  cancelRequest(page, reason = `\`cancelRequest(${page})\` from \`RequestManager.cancelRequest\``) {
    this.log(`cancelling group \`${page}\``);

    if (this.hasPage(page) && this.pendingRequests[page].length > 0) {
      for(let obj of this.pendingRequests[page]) {
          this.log(`cancelling request \`${obj.id}\``);
          obj.cancelFn(reason);
          this.log(`request \`${obj.id}\` cancelled`);
      }
      delete this.pendingRequests[page];
    }
  }

  cancelAllRequests(reason) {
    for (let requestId in this.pendingRequests) {
      let _reason = reason || `\`cancelRequest(${requestId})\` from \`RequestManager.cancelAllRequests\``;
      this.cancelRequest(requestId, _reason);
    }
  }

  hasPage(page) {
    return !!this.pendingRequests[page];
  }

  log(message) {
    if (this.options.debug === true) {
      console.log(message);
    }
  }
}
