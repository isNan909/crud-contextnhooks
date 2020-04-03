export default (state,action) => {
    switch(action.type){
        case 'CREATE_ARTICLE':
            return{
                ...state,
                article: [...state.article, action.payload]
            };
        
        case 'EDIT_ARTICLE':
            const editingArticle = action.payload;
            const updatedArticle = state.article.map(article=>{
                if(article.id === editingArticle.id){
                    return editingArticle;
                }
                return article;
            });
            return{
                ...state,
                article: updatedArticle
            }

            case 'DELETE_ARTICLE':
                return { 
                    ...state,
                    article: state.article.filter(article => article.id !== action.payload)
                };

            default: return state;
    }
} 