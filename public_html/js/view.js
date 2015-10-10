var timeLineOptions = {
    zoom_sequence: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    initial_zoom: 9,
    language: "zh-tw"
};

var timeLineDisplay;

var TimeLine = function (year, key) {
    arguments.callee.count = ++arguments.callee.count || 0;
    this.id = arguments.callee.count;
    this.theYear = year;
    this.theKey = key;
    this.refLink = "https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8_(" + this.theYear + "%E5%B9%B4)";
    return arguments.callee.count;
};

var TimeLineViewModel = {
    timeLineList: ko.observableArray([
        new TimeLine(2009, "1uYHKeZKuPXPA_uSCfsCAluVlxuqd1BYfhLYSmbcaQ6A"),
        new TimeLine(2010, "1hFo75oRVXljZYPAxruEjhLPn2JLlCanijA67kdm_sH0"),
        new TimeLine(2011, "1y2D1HSINmEmf7hu-6EyXM3_ERf2yFWOmLsm2qvWOK50"),
        new TimeLine(2012, "1lDopYO39lTjaNSgTh9t-OMF-BvtpmUh5qsUsC0H2gI0"),
        new TimeLine(2013, "1AXvVl86E-h8CmwrHGeCAJbJAQaCA2UNY58_uCrx2jh8"),
        new TimeLine(2014, "1BxTZ9eoQ1-h243fpkuxdGaHy9dhXKede5kBYnDkWPdw")
    ]),
    selectedTimeLine: ko.observable(TimeLine.count)
};

function display(id) {
    if (Number.isInteger(id)) {
        document.getElementById("reflink").setAttribute("href", TimeLineViewModel.timeLineList()[id]["refLink"]);

        var key = TimeLineViewModel.timeLineList()[id]["theKey"];
        $.ajax("json/" + key + ".json",
        {
            dataType: "json",
            beforeSend : function(){$('#wrapper').dimmer({opacity:0.3});$('#wrapper').dimmer('show');},
            complete : function(){$('#wrapper').dimmer('hide');},
            error : function(){timeLineDisplay = new TL.Timeline('timeline-embed', "https://docs.google.com/spreadsheets/d/" + key + "/pubhtml", timeLineOptions);},
            success : function(data){timeLineDisplay = new TL.Timeline('timeline-embed', data, timeLineOptions)},
        });
    }
}
;

TimeLineViewModel.selectedTimeLine.subscribe(function (selectedValue) {
    display(selectedValue);
});
ko.applyBindings(TimeLineViewModel);

$('select').dropdown({on: 'hover'});
display(TimeLine.count);

