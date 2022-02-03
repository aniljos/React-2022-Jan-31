import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import simpleHOC  from '../hoc/simpleHOC';

function Search(){

    ///console.log("search function start");
    const [searchkey, setSearchKey] = useState("india");
    const [results, setResults] = useState({});
    const [limit, setLimit] = useState(20);
    //let count = 0;
    const count = useRef(0);

    //useEffect(callback, [dependencies])
    useEffect(() => {

        console.log("simulates the componentDidMount");

        //return a callback from the useeffect(simulates componentDidMount)
        return () => {
            console.log("simulates the componentWillUnmount");
        }

    }, [])
    useEffect(() => {
        console.log("results changed", results);
    }, [results])

    useEffect(() => {
        console.log("searchkey changed", searchkey);
    }, [searchkey])


    
    function change(evt){

        setSearchKey(evt.target.value);
    }

   

    async function search(){

        if(searchkey){

            count.current++;
            console.log("count: ", count.current);

            try {
                
                //const url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchkey;

                
                const url = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${searchkey}&limit=${limit}`;
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
    //console.log("search function returning");
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
                Limit 
                <select className='form-control' value={limit} onChange={(e) => setLimit(e.target.value)}>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                </select>
            </div>
            <br/>
            <div>
                <button className="btn btn-success" onClick={search}>Search</button>
            </div>

            <div>
                {results.data ? results.data.map((item, index) => {

                    return (
                        <div key={index}>
                            <p>
                                <a href={results.links[index]} target="_blank">{item}</a>
                            </p>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default simpleHOC(Search);