# This is my portfolio site
- This page is designed to showcase my skills and give interested parties access to my completed projects, tech stack etc.
- The live version can be found [here:](https://bman2386.github.io/Brendon.Biagi/)

- It does have a very subtle animation feature when you scroll down the page
    - This is achieved by adding a transition to the CSS
       ```
        .top-s {
            height: 100%;
            width: 50%;
            transition: 2s;
            background-color: #C6EAFA;
        }
        ```

    - having 2 different classes for the styling 
        - ex. ```.top and .top-s```
    - and using JavaScript to manage when to transition

        ```
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
        const elementArray = ["top", "a1", "a2", "a3", "a4", "a5"];
        const classListArray = ['top-s', 'nav-s', 'nav-s','nav-s','nav-s', 'nav-s'];
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            for (let i = 0; i < elementArray.length; i++){
            document
                    .getElementById(elementArray[i])
                    .classList.add(classListArray[i]);
            }
        } else {
            for (let i = 0; i < elementArray.length; i++){
            document
                .getElementById(elementArray[i])
                .classList.remove(classListArray[i]);
                }
            }
        }
        ```
- If you would like to discuss my page or schedule an interview please  email me @ brendon.biagi@gmail.com





