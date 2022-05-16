# Repo_Work_Day_Scheduler_05_15_2022

USER STORY
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

ACCEPTANCE
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

User Experience - as a user tracking daily 9-5 scheduling, you'll be able to use this app to track activities and add new ones to your calendar using local storage. The user can also clearly see what events are happening in the future, present, and past with the color coding - green for future, red for present, grey for past. The user can also clear see date on the top

Build Experience - This app took a few different iterations to get close to correct. Initially I began with the starter code and built out the time blocks in the HTML. I then added the clock using Moment.js. Turnign the hours to military time was key to make my If Statements work for color coding.

repo link - https://github.com/PeterBookmyer/Repo_Work_Day_Scheduler_05_15_2022

pages link - https://peterbookmyer.github.io/Repo_Work_Day_Scheduler_05_15_2022/

![Alt text](/screenshot.png "Screenshot of App")
