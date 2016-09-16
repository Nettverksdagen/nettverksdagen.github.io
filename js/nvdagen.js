function DayDiff(CurrentDate, compareDate) {
			var TYear=CurrentDate.getFullYear();
			var TDay=new Date(compareDate);
			TDay.getFullYear(TYear);
			var DayCount=(TDay-CurrentDate)/(1000*60*60*24);
			DayCount=Math.round(DayCount); 
			return(DayCount);
		}
		
$(document).ready(function() {
	var Today = new Date();
	document.querySelector(".timeLeft").innerHTML = " - " + DayDiff(Today, "February, 2, 2017") + " dager igjen";
});