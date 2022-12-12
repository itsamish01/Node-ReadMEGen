function fileGenerator(response) {
    var content = `# ${response.title}
    ##### ${response.logo}[${response.userName}](${response.GitHub}) [Email Me](${response.email}) 
    
    ## Table of Contents
    * [Repository Description](#Repository-Description)
    * [Installation Instructions](#Install)
    * [Usage Information](#Usage)
    *[References](#Ref)
    * [Repositiory End-Goal Criterea](#Criterea)
    * [Future Project](#Future-Project)
    
    # Repository Description
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.description}
    
    
    ## User Story
    ### As a developer, I want to better understand node and how to use another alternative tool to guide me to become a better developer.

    ## Acceptance Criteria

        1. WHEN I am prompted for information about my application repository
        2. THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        3. WHEN I enter my project title
        4. THEN this is displayed as the title of the README
        5. WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        6. THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        7 .WHEN I choose a license for my application from a list of options
        8. THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        9. WHEN I enter my GitHub username
        10. THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        11. WHEN I enter my email address
        12. THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        13. WHEN I click on the links in the Table of Contents
        14. THEN I am taken to the corresponding section of the README
    
    ### Contribution Guidelines
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.contribute}
    
    
    ## Test Instructions
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.  ${response.test}
    2.  ${response.test2}
    3.  ${response.test3}
    
    
    ## Overview: What We Accomplished!
    ### Workflow [Back to Table of Contents](#Table-of-Contents)
    ${response.accomplish}
    
    
    ### Screenshots (Building this application)
    ###### [Back to Table of Contents](#Table-of-Contents)
    #### Demo I createad ![script.js](${response.scriptjs})
    
    #### Demo I createad ![fileGenerator.js](${response.fileGnerator})
    
    #### Demo I createad ![ReadMe.md](${response.ReadMe})
    
    
    ## References
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.  ${response.ref1}
    
    2.  ${response.ref2}
    
    ## Repositiory End-Goal Criterea
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.endgoal}
    
    ## License
    ${response.license}
    
    End of README Thank you`
    return content;
};

module.exports = fileGenerator;