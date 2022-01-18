exports.pageNotFound = (request, response, next) => {
    //response.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
    response.status(404).render('page-not-found',
        {
            docTitle: 'Page Not Found'
        });
};