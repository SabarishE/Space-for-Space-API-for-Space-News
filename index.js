
// ---------a fetch call is made to get the data--------
// ---------fetched data is passed to display function------

function space() {
  fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=15", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      display(data);
      console.log("space data fetched successfully");
    })
    .catch((err) => console.log("ERROR in get space !!!!!", err));
}

space();

// -------display function is used to display the data in the form of cards using map method------

function display(d) {
  d.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute("class", "cardDiv");

    let img = document.createElement("img");
    img.setAttribute("src", e.imageUrl);

    let title = document.createElement("p");
    title.innerText = e.title;
    title.setAttribute("class", "cardTitle");


    let summary = document.createElement("div");
    summary.setAttribute("class", "cardSummary");
    summary.innerText = e.summary;

    let details = document.createElement("a");
    details.setAttribute("href", e.url);
    details.setAttribute("target", "_blank");
    details.innerText = "full article";

    // --------appending all the sub-elements into card div------

    card.append(img, title, summary, details);
    
    document.getElementsByClassName("content")[0].append(card);
  });
}
