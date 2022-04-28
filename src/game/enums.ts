export const MaxTransferredAbilities = 5;
export const NumberOfSlots = 12;

export enum Tribe {
    Canine = 'Canine',
    Reptile = 'Reptile',
    Insect = 'Insect',
    Avian = 'Avian',
    Hooved = 'Hooved',
    Squirrel = 'Squirrel'
}

export enum Currency {
    None = 'None',
    Blood = 'Blood',
    Bone = 'Bone',
}

export enum CostLimit {
    Blood = 4,
    Bone = 10
}

export enum CardKind {
    Normal = 'Normal',
    Special = 'Special',
    Rare = 'Rare',
    Terrain = 'Terrain',
    Pelt = 'Pelt'
}

export enum CardPowerType {
    Attack = 'Attack',
    Kin = 'Kin',
    Ants = 'Ants',
    Mirror = 'Mirror',
    HandCount = 'HandCount',
}

export enum CardFace {
    Front = 'Front',
    Back = 'Back',
}

export enum CardMark {
    None = 'None',
    Attack = 'Attack',
    FishHook = 'FishHook',
    Sacrifice = 'Sacrifice',
}

export enum Cursor {
    Default = 'Default',
    Sacrifice = 'Sacrifice',
    PlaceCard = 'PlaceCard',
}

export enum CardDecal {
    Blood1 = 'Blood1',
    Blood2 = 'Blood2',
    Blood3 = 'Blood3',
    Blood4 = 'Blood4',
    Fungus = 'Fungus',
    Stitches = 'Stitches',
    SacrificeSplatter = 'SacrificeSplatter',
}

export enum CardEffect {
    None = 'None',
    HitUp = 'HitUp',
    HitLeft = 'HitLeft',
    HitRight = 'HitRight',
    HitDown = 'HitDown',
    ShakeOnce = 'ShakeOnce',
    Shake = 'Shake',
    HurtBelow = 'HurtBelow',
    HurtAbove = 'HurtAbove',
    Death = 'Death',
}

export enum GameScreen {
    None = 'None',
    Map = 'Map',
    Encounter = 'Encounter',
    Trapper = 'Trapper',
    Trader = 'Trader',
    CampFire = 'CampFire',
    SacrificeStone = 'SacrificeStone',
    ChooseItem = 'ChooseItem',
    ChooseTotem = 'ChooseTotem',
    DeckChallenge = 'DeckChallenge',
    CombineCards = 'CombineCards',
    DestroyCard = 'DestroyCard',
    ChooseRandomCard = 'ChooseRandomCard',
    ChooseRandomKinCard = 'ChooseRandomKinCard',
    ChooseRandomCostCard = 'ChooseRandomCostCard',
}

export enum SlotIndex {
    QueueSlot1 = 0,
    QueueSlot2 = 1,
    QueueSlot3 = 2,
    QueueSlot4 = 3,
    OpponentSlot1 = 4,
    OpponentSlot2 = 5,
    OpponentSlot3 = 6,
    OpponentSlot4 = 7,
    PlayerSlot1 = 8,
    PlayerSlot2 = 9,
    PlayerSlot3 = 10,
    PlayerSlot4 = 11,
}

export enum Ability {
    AllStrike = 'AllStrike',
    Apparition = 'Apparition',
    Banding = 'Banding',
    BeesOnHit = 'BeesOnHit',
    BloodGuzzler = 'BloodGuzzler',
    BoneDigger = 'BoneDigger',
    Brittle = 'Brittle',
    BuffEnemy = 'BuffEnemy',
    BuffEnemyOpponent = 'BuffEnemyOpponent',
    BuffNeighbours = 'BuffNeighbours',
    Child13SacrificeEvolution = 'Child13SacrificeEvolution',
    CorpseEater = 'CorpseEater',
    CreateBells = 'CreateBells',
    CreateDams = 'CreateDams',
    DeathShield = 'DeathShield',
    DeathTouch = 'DeathTouch',
    DebuffEnemy = 'DebuffEnemy',
    DrawAnt = 'DrawAnt',
    DrawCopy = 'DrawCopy',
    DrawCopyOnDeath = 'DrawCopyOnDeath',
    DrawRabbits = 'DrawRabbits',
    DrawRandomCardOnDeath = 'DrawRandomCardOnDeath',
    Evolve = 'Evolve',
    Evolve1 = 'Evolve1',
    Evolve2 = 'Evolve2',
    Evolve3 = 'Evolve3',
    Filler = 'Filler',
    Flying = 'Flying',
    GuardDog = 'GuardDog',
    Haunter = 'Haunter',
    IceCube = 'IceCube',
    KillsSurvivors = 'KillsSurvivors',
    MoveBeside = 'MoveBeside',
    Ouroboros = 'Ouroboros',
    PermaDeath = 'PermaDeath',
    PreventAttack = 'PreventAttack',
    QuadrupleBones = 'QuadrupleBones',
    RandomAbility = 'RandomAbility',
    RandomConsumable = 'RandomConsumable',
    Reach = 'Reach',
    CatSacrificeEvolution = 'CatSacrificeEvolution',
    Sacrificial = 'Sacrificial',
    Sentry = 'Sentry',
    Sharp = 'Sharp',
    Sinkhole = 'Sinkhole',
    Sniper = 'Sniper',
    SplitStrike = 'SplitStrike',
    SquirrelOrbit = 'SquirrelOrbit',
    SteelTrap = 'SteelTrap',
    Strafe = 'Strafe',
    StrafePush = 'StrafePush',
    Submerge = 'Submerge',
    SwapStats = 'SwapStats',
    TailOnHit = 'TailOnHit',
    Transformer = 'Transformer',
    TripleBlood = 'TripleBlood',
    TriStrike = 'TriStrike',
    Tutor = 'Tutor',
    Whackamole = 'Whackamole',
}
