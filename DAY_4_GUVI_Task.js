// 2. Create your own resume in JSON format

let resume = {
    "Name" : "Hari Krishnan V K",
    "DOB" : "30/01/1999",
    "PhNo" : "+91 9655280060",
    "Education" : {
        "Degree" : {
            "Stream" : "B.E Mechanical Engineering",
            "College" : "KIT Kalaignarkarunanidhi Institute of Technology, Coimbatore",
            "Year" : "2016-2020",
            "CGPA" : "8.15"
        },
        "HSC_12th" : {
            "Stream" : "Computer Science",
            "School" : "Adwaith G N S MHSS, Coimbatore",
            "Year" : "2016",
            "Mark" : "1024/1200"
        },
        "SSLC_10th" : {
            "School" : "Adwaith G N S MHSS, Coimbatore",
            "Year" : "2014",
            "Mark" : "479/500"
        }
    },
    "Skills" : {
        "JAVA" : "Intermediate",
        "Android_Development" : "Beginner",
        "KOTLIN" : "Intermediate",
        "JavaScript" : "Beginner",
        "HTML" : "Beginner",
        "CSS" : "Beginner"
    },
    "Accomplishments" : [
        {
            "Certification" : {
                "NPTEL" : "GEAR AND GEAR Unit Mechanism",
                "Toastmaster" : "Communication, Leadership",
                "Udemy" : "JAVA Complete course"
            }
        },
        {
            "Extra_Curricular" : {
                "Sports" : "District Level Hockey Player",
                "Year" : "2013-2015"
            }
        }
    ],
    "Interests" : "Android_development,Research_and_Development,Full_Stack_developer",
    "EXPERIENCE" : [
        {
            "WORK" : {
                "Company" : "HCL Technologies",
                "Year" : "Jan 2022 – Current",
                "Role" : "Admin – Analyst"
            }
        },
        {
            "HandsOnExperience" : [
                {
                    "BSNL" : {
                        "Role" : "Broadband Technician",
                        "Year" : "Feb 2021 - April 2021"
                    },
                    "KIT_Toastmasters_Club" : {
                        "Year" : "Apr 2018 - Jan 2020",
                        "Role" : "VPPR - Vice President Public Relation"
                    },
                    "Final_Year_Project" : {
                        "Year" : "Nov 2019 - Mar 2020",
                        "Title" : "Domestic Solar air dryer with Parallel plate single channel flow and Mutli angle chamber"
                    }
                }
            ]
        }
    ]
}

console.log(resume);