export default class Application{

    /**
     * 
     * @type {HTMLElement}
     */
    app

    constructor(app)
    {
        this.validate(app);
        this.init();
    }

    validate(app)
    {
        if(!app instanceof HTMLElement)
        {
            throw new Error('Argument must be a valid HTML eLement')
        }
        this.app = app;
    }

    init()
    {
        console.log('init started');
    }
    
    destroy()
    {
        console.log('Destroy application');
        while(this.app.lastChild)
        {
            this.app.lastChild.remove();
        }
    }
}