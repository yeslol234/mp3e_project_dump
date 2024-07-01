$('body').terminal({
    echo: function(text) { 
        this.echo(text)
    }
}, {
    greetings: 'terminal v1.0',
    prompt: "C:\\"
});