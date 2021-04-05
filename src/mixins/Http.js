import $ from 'jquery'

export default {
    methods: {
        /* Shortcut function for fetch and update
         * Vue models;
         *
         * Vue `model` is an object with next fields
         * {
         *  results: Array<Object>, // List of model objects
         *  next: string, // Next url-string for fetch next page
         *  url: string, // URL to fetch model objects
         *  loading: boolean, // Is fetch performing?
         *  count?: number // Total objects count (optional)
         * }
         */
        http(token, model, mapResponse, clearModel) {
            /* Map data from response to model */
            this.model = model;
            this.mapResponse = mapResponse || function (model, data) {
                model.results.push(...data.results);
                model.next = data.next;
                if (this.hasProp('count', model, data)) {
                    model.count = data.count;
                }
            }
            this.clearModel = clearModel || function (model) {
                model.results = [];
            }
            this.processResponse = function (data, clear) {
                if (clear)
                    this.clearModel(model);
                this.mapResponse(model, data);
            }
            this.hasProp = function (key, model, data) {
                return Object.prototype.hasOwnProperty.call(model, key) && Object.prototype.hasOwnProperty.call(data, key);
            }
            this.onError = function (err) {
                if (Object.prototype.hasOwnProperty.call(this.model, 'requestError')) {
                    this.model.requestError = err;
                }
            }

            this.fetch = function (url, method, data, onFetch) {
                $.ajax({
                    url: url || model.url,
                    data: data || model.filters,
                    method: method || 'get',
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    beforeSend: function () {
                        model.loading = true;
                        this.onError(null);
                    }.bind(this),
                    success: function (data) {
                        if (onFetch)
                            onFetch(data);
                    }.bind(this),
                    error: function (err) {
                        this.onError(err);
                    }.bind(this),
                    complete: function () {
                        model.loading = false;
                    }
                })
            }
            this.getNext = function () {
                this.fetch(model.next, 'get', {}, function (data) {
                    this.processResponse(data, false);
                }.bind(this))
            }
            this.getNew = function (data) {
                this.fetch(model.url, 'get', data, function (data) {
                    this.processResponse(data, true);
                }.bind(this))
            }
        }
    }
}