/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
var NFTstore = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,uid,section,department,yearjoined) 
{
    const NFTobj = {
        nameofstud : name,
        uidofstud : uid,
        sectionofstud : section,
        departmentofstud : department,
        yearjoinedofstud : yearjoined
    }
    NFTstore.push(NFTobj);
    console.log("Minted : "+ name);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () 
{
    var n1 = NFTstore.length;
    for (let i=0;i<n1;i++)
    {
        console.log(" ");
        console.log("Name : " + NFTstore[i].nameofstud);
        console.log("UID : " + NFTstore[i].uidofstud);
        console.log("Section : " + NFTstore[i].sectionofstud);
        console.log("Department : " + NFTstore[i].departmentofstud);
        console.log("JoiningYear : " + NFTstore[i].yearjoinedofstud);
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() 
{
    var n2 = NFTstore.length;
    console.log("\nNo of NFTs minted = " + n2);
}
// call your functions below this line
mintNFT("Suresh",12245,810,"ComputerDept",2022);
mintNFT("Adarsh",12317,701,"ElectronicDept",2023);
mintNFT("Rehan",12218,504,"FinanceDept",2022);
listNFTs();
getTotalSupply();