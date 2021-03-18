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

class Restriction extends Object {
    type = '';
}

export {LibRML, Action, Restriction}