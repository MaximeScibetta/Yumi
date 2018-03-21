export const getters = {
    weekClassicMenu(state){
        return state.classic_menus;
    },
    weekDay() {
        var week = [];
        var i = 0;
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        while (i != 7) {
            var date = new Date();
            var calculatDate = date.addDays(i);
            var calculatDateArray = calculatDate.toString().split(' ');
            var formatDayEN = Array.concat(calculatDateArray[0], calculatDateArray[2])
            switch (formatDayEN[0].valueOf()) {
                case "Mon":
                    formatDayEN[0] = "LUN"
                    week.push(formatDayEN.join(' '))
                    break;
                case "Tue":
                    formatDayEN[0] = "MAR"
                    week.push(formatDayEN.join(' '))
                    break;
                case "Wed":
                    formatDayEN[0] = "MER"
                    week.push(formatDayEN.join(' '))
                    break;
                case "Thu":
                    formatDayEN[0] = "JEU"
                    week.push(formatDayEN.join(' '))
                    break;
                case "Fri":
                    formatDayEN[0] = "VEN"
                    week.push(formatDayEN.join(' '))
                    break;
                case "Sat":
                    break;
                case "Sun":
                    break;
                default:
                    break;
            }
            i++
        }
        return week;
    },
}