/**
 * 
 */

const url               = 'http://192.168.56.1:8080';
const folder            = 'ProjectApp/ZSbs/Model/phpMyAdmin';
const product           = 'getProduct.php';
const account           = 'getAccount.php';
const toolAdd           = 'toolAdd.php';
const toolSearch        = 'toolSearch.php';
const toolProductAdd    =  'toolProductAdd.php';
const toolProductDelete = 'toolProductDelete.php';
const toolProductEdit   = 'toolProductEdit.php';

export async function getProduct(){
    let articles = await fetch(`${url}/${folder}/${product}`);
    return articles;
}

export async function getAccount(username, password){
    let articles = await fetch(`${url}/${folder}/${account}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({
            Username: username,
            Password: password,
        })
    });
    return articles;
}

export async function getToolAdd(username, password, email){
    let articles = await fetch(`${url}/${folder}/${toolAdd}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({
            Username: username,
            Password: password,
            Email:      email,
        })
    });
    return articles;
}

export  async function getToolSearch(title){
    let articles = await fetch(`${url}/${folder}/${toolSearch}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({
            Title: title,
        })
    });
    return articles;
}

export async function getToolProductAdd(title,imageUri, description, code){
    let articles = await fetch(`${url}/${folder}/${toolProductAdd}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({
            Title: title,
            ImageUri: imageUri,
            Description: description,
            Code: code,
        })
    });
    return articles;
}

export async function getToolProductDelete(id){
    let articles = await fetch(`${url}/${folder}/${toolProductDelete}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({
            Id_bb: id,
        })
    });
    return articles;
}

export async function getToolProductEdit(id, title, description, code){
    let articles = await fetch(`${url}/${folder}/${toolProductEdit}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({
            Id_bb: id,
            Title: title,
            Description: description,
            Code: code,
        })
    });
    return articles;
}