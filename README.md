# Rania Marhoni CV
Stream One Project: User-Centric Frontend Development - Code Institute

This is my Portfolio/CV Website to present to prospective employers and recruiters. It includes a about me section, my skills, work history, a portfolio to add future projects and a contact form.

## UX Design
### User Story
As a prospective client or recruiter, I expect to see skills they provide, a brief overview of there work history, a portfolio and be able to download their CV.
### Strategy
The aim was to create a user-friendly minimalist design where users would be able to access information easily.
### Scope
I wanted to provide them with a brief overview of myself and my capabilities for prospective employers and recruiters. They get to see who I am, my work history work, skills and portfolio and be able to contact me if they wish also, they can download my CV if they wish to find out more details.
### Structure
In the portfolio section it's set up to provide a short description of the project and technologies used with a link to the GitHub and demo. In the navigation and footer, they can download my CV. The user can also access my LinkedIn and GitHub at the footer too.
### Skeleton
With Adobe XD I was able to come up with a Skelton for phone, tablet and webpage see below

[iPhone 6, 7 & 8 Plus](https://github.com/raniamarhoni/RaniaCV/blob/master/assets/wireframes/iPhone%206-7-8%20Plus%20%E2%80%93%201.png)

[Tablet iPad](https://github.com/raniamarhoni/RaniaCV/blob/master/assets/wireframes/Tablet%20-%20iPad.png)

[Webpage 1920](https://github.com/raniamarhoni/RaniaCV/blob/master/assets/wireframes/Web%201920%20%E2%80%93%201.png)
### Surface
The backgrounds where chosen to create a creative feel with a goldish colour scheme to create sleek and modern feel.

## Features
 The navbar stays fixed on the top make it easily accessible. It expands on a large screen and collapses in a smaller screen 

The work history section adjusts its view depending on the screen size. On a small or medium screen, it is shown in portrait to show a more minimalist design but a landscape view on a large screen so it can take advantage of the space. 

A contact form has been added to be sent directly to my email and the user also gets a email sending confirmation that the email was sent. This uses EmailJS to send all the emails 

### Features left to Implement
 I would like to add future projects in the portfolio section. 

## Technologies
1.	HTML
2.	CSS
3.	Bootstrap (3.3.7)
4.  Javascript


## Testing
### Homepage / Navbar 
The navbar has been manually tested to make sure it expands on a large screen but collapsed in a smaller screen making sure it always stays fixed to the top all the time. 
### Work History Section
This section was manually tested to make sure the timeline appears in a landscape view on a mobile and tablet view but appears in portrait view when displayed on a large screen this. 
### Contact
In the contact form it’s has been tested if they enter an invalid email address also the fields ‘name’, ‘email’ and ‘message’ are all required and will flag up if they are not inputted in. Then testing has been added that when they do send a message it come through to my email and the users email 
### Mobile-first approach
All the coding was done to fit the mobile-first approach making sure each screen utilities the space it has this has been manually tested and represented in the about me, skills and portfolio sections. 
### Links
All the links have been manually tested to make sure that they take you to the right section of the webpage or opens a new tab using the target=”_blank” and take you to the right destination too. 
### Platforms and Sizes 
The project was tested across multiple screens (iPhone 5, 6, 7 Chrome and Safari, iPad, Samsung Galaxy) during testing I realised that some of the headers were not fitting in a iPhone 5 screen and therefor was edited to fit in a smaller screen but returned to the original size when used on a bigger screen
### Background Images
The background images were changed at the end so they are cropped and not stretched
### Validator
The HTML and CSS was also put in a validator to make sure all errors found was fixed and no errors were uploaded. 

## Deployment
This site uses GitHub pages, deployed directly from the master branch. For the site to deploy correctly on GitHub pages, the landing page must be named index.html. When a new commit is done it will update automatically to the master branch. 

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/raniamarhoni/RaniaMarhoni.git into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## Credits
### Content
All content in this site was written by me.
### Media
All photos were taken from Pexels, a stock image library
### Acknowledgements
The contact form pop up was taken from this [GitHub repository](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive)
