WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("DepartureCity", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("ArrivalCity", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("DepartureDate", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("Class", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("NumberOfTickets", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
