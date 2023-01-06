export default function RepoCpmp({stargazers_count,forks_count,name,language,svn_url}){

    return <div style={{border:"1px solid deepskyblue"}} onClick={()=>window.open(svn_url)}>

        <h1>Name: {name}</h1>
        <h2>Language: {language}</h2>
        <h3>Stars: {stargazers_count}</h3>
        <h4>Forks: {forks_count}</h4>

    </div>

}