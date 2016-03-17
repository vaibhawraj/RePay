var loader = {
	page_queue : [],
	page : function(url,elem){
		this.url = url;
		this.elem = elem;
	},
	callback : null,
	add : function(url,elemId) {
		if(url=='') {
			console.error('Please specify url');
		} else if(elemId=='') {
			console.error('Please specify elemId : ',elemId);
		} else if($(elemId).size()==0) {
			console.error('No element with elemId : ',elemId);
		} else {
			this.page_queue.push(new this.page(url,$(elemId)));
			return 'success';
		}
		return 'error';
	},
	load : function(callback) {
		if(typeof(callback)!='function') {
			throw Error('Callback must be function');
		}
		this.callback = callback;
		this.begin_loading();
	},
	begin_loading : function() {
		if(this.page_queue.length == 0) {
			console.warn('Nothing to load');
			this.callback();
		}
		else {
			this.load_next();
		}
	},
	end_loading : function() {this.callback();},
	load_next : function() {
		if(this.page_queue.length!=0) {
			this.load_page(this.page_queue.pop());
		} else {
			console.info('All pages loaded');
			this.end_loading();
		}
	},
	load_page : function(page) {
		var that = this;
		$.ajax(page.url,{
				async:false,
				error : function(jqXHR,textStatus,errorThrown) {
					throw errorThrown;
				},
				success : function(data,textStatus,jqXHR){
					page.elem.html(data);
					that.load_next();
				}
			});
	}
};