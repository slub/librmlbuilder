class LibRML extends Object {
    id = '';
    relatedids = [];
    tenant = '';
    usageguide = '';
    mention = false;
    sharealike = false;
    copyright = false;
    actions = [];
}

class Action extends Object {
    type = '';
    permission = false;
    restrictions = [];
}

class DateRestriction {
    type = 'date';
    todate = new Date();
    fromdate = new Date();
}

export {LibRML, Action, DateRestriction}