### User Story 📖

As a project manager, I want an aggregation feature that collects and sums booked time data for different Jira tickets, so I can easily track the total time spent on each ticket, even when there are multiple time bookings by multiple employees.

### Detailed Requirements Description 📄

The primary goal is to provide an accurate and comprehensive view of the total time spent on each ticket, considering multiple bookings.

### Key Requirements:

1. #### Data Collection:

- The system must collect time booking entries from all Jira Tickets.
- Each time booking needs to include essential details like ticket ID, user ID, time booked and date/time of the booking.

2. #### Summation Logic:

- The system should sum all time booked on one Jira Ticket. (If a ticket has multiple bookings)

### Acceptance Criteria ✅

- All time booked on Tickets of the Solution-Team (e.g. SOL-123) needs to be collected.
- All time on Tickets with multiple entries should be summed up.
- Time bookings from different employees on the same ticket have to be summed up as well.
