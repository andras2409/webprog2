document.addEventListener('DOMContentLoaded', function(){
    let application;
    
    const buttons = document.querySelectorAll('button');
    const app = document.getElementById('app');

    for(let button of buttons)
    {
        button.addEventListener('click', function(evt){
            if(application)
            {
                application.destroy();
            }

            const appName = button.getAttribute('data-app');
            if(appName)
            {
                const appPath = `./Application/${appName}/${appName}.js`;

                import(appPath).then(function(appModule){
                    console.log(appModule);
                    const appObject = appModule.default;
                    application = new appObject(app);
                }, function(err){
                    throw err;
                });
            }
            else
            {
                throw new Error(`No application was linked to button ${button.textContent}.`);
            }
        });
    }
});