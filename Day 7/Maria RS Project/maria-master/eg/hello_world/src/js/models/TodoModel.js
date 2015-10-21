maria.Model.subclass(hello_world, 'TodoModel', {
    properties: {
        _content:'hello world',
        _isDone: false,
        getContent: function(){
            return this._content;
        },

        setContent: function(content){
            content = hello_world.trim('' + content);
            if(this._content !== content) {
                this._content = content;
                this.dispatchEvent({type: 'change'});
            }
        },

        isDone: function(){
            return this.isDone;
        },

        setDone: function(isDone){
            isDone = !!isDone;
            if (this.isDone !== isDone){
                this.isDone = isDone;
                this.dispatchEvent({type: 'change'});
            }
        },

        toggleDone: function(){
            this.setDone(!this.isDone());
        }
    }
});