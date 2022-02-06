let info=[
    {
        "org":"infosys",
        "Location":["banglore","mysore","chennai"],
        "employess": 20000,
        "basic":4.5,
        "services":["apps", "test", " bpo"],
        "benchmark": ["airtel", "irctc"]
    },
    {
        "org":"Conginizant",
        "Location":["banglore","Delhi","chennai"],
        "employess": 15000,
        "basic":2.5,
        "services":["apps", "test"],
        "benchmark": ["axis", "incometax"]
    },
    {
        "org":"Every India pvt ltd",
        "Location":["banglore","chennai"],
        "employess": 10000,
        "basic":3.5,
        "services":["apps"],
        "benchmark": ["Indian Bank", "irctc"]
    },
    {
        "org":"Wipro",
        "Location":["banglore","mysore","chennai"],
        "employess": 30000,
        "basic":6.5,
        "services":["apps", "test", " bpo"],
        "benchmark": ["icici"] 
    }
] 

const getting=(name)=>{
    const newone=info.filter((elem)=>{
        return elem.org===name
    })
    return newone[0]
}

const putting=(obj)=>{
    info.push(obj)
    alert("New Corporate added")
}

export {getting, putting} 
export default info;