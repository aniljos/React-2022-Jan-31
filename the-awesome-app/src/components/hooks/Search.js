import {useState} from 'react';
import axios from 'axios';

function Search(){


    const [searchkey, setSearchKey] = useState("india");
    const [results, setResults] = useState([]);
    
    function change(evt){

        setSearchKey(evt.target.value);
    }

    async function search(){

        if(searchkey){

            try {
                
                const url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchkey;
                const resp = await axios.get(url);
                console.log("search data", resp.data);
                //async
                setResults({data: resp.data[1], links: resp.data[3]});
                //console.log("results", results);

            } catch (error) {
                alert(error);
            }

        }


    }
    return (
        <div>
            <h4>Search</h4>

            {searchkey ? <div className="alert alert-success">
                    Searching for {searchkey}
            </div> : null}

            <div>
                <input className="form-control" 
                        type="search" placeholder="Search" value={searchkey} onChange={change}/>
            </div>
            <div>
                <button className="btn btn-success" onClick={search}>Search</button>
            </div>
        </div>
    )
}

export default Search;