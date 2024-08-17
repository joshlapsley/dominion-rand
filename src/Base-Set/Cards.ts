import { Card } from "../types"
import artisan from "./BaseSetImages/Artisan.jpg"
import bandit from "./BaseSetImages/Bandit.jpg"
import bureaucrat from "./BaseSetImages/Bureaucrat.jpg"
import cellar from "./BaseSetImages/Cellar.jpg"
import chapel from "./BaseSetImages/Chapel.jpg"
import council_room from "./BaseSetImages/Council_Room.jpg"
import festival from "./BaseSetImages/Festival.jpg"
import gardens from "./BaseSetImages/Gardens.jpg"
import harbinger from "./BaseSetImages/Harbinger.jpg"
import laboratory from "./BaseSetImages/Laboratory.jpg"
import library from "./BaseSetImages/Library.jpg"
import market from "./BaseSetImages/Market.jpg"
import merchant from "./BaseSetImages/Merchant.jpg"
import militia from "./BaseSetImages/Militia.jpg"
import mine from "./BaseSetImages/Mine.jpg"
import moat from "./BaseSetImages/Moat.jpg"
import moneylender from "./BaseSetImages/Moneylender.jpg"
import poacher from "./BaseSetImages/Poacher.jpg"
import remodel from "./BaseSetImages/Remodel.jpg"
import sentry from "./BaseSetImages/Sentry.jpg"
import smithy from "./BaseSetImages/Smithy.jpg"
import throne_room from "./BaseSetImages/Throne_Room.jpg"
import vassal from "./BaseSetImages/Vassal.jpg"
import village from "./BaseSetImages/Village.jpg"
import witch from "./BaseSetImages/Witch.jpg"
import workshop from "./BaseSetImages/Workshop.jpg"

export const Artisan = {
    set: "base",
    name: "Artisan",
    cardTypes: ["payload", "gainer"],
    image: artisan,
    cost: 6,
} as Card

export const Bandit = {
    set: "base",
    name: "Bandit",
    cardTypes: ["payload", "gainer"],
    image: bandit,
    cost: 5,
} as Card

export const Bureaucrat = {
    set: "base",
    name: "Bureaucrat",
    cardTypes: ["payload", "gainer"],
    image: bureaucrat,
    cost: 4
} as Card

export const Cellar = {
    set: "base",
    name: "Cellar",
    cardTypes: ["sifter"],
    image: cellar,
    cost: 2,
} as Card

export const Chapel = {
    set: "base",
    name: "Chapel",
    cardTypes: ["trasher"],
    image: chapel,
    cost: 2,
} as Card

export const Council_Room = {
    set: "base",
    name: "Council_Room",
    cardTypes: ["drawer"],
    image: council_room,
    cost: 5,
    hasBuy: true
} as Card


export const Festival = {
    set: "base",
    name: "Festival",
    cardTypes: ["village", "payload"],
    image: festival,
    hasBuy: true,
    cost: 5,
} as Card

export const Gardens = {
    set: "base",
    name: "Gardens",
    cardTypes: ["victory"],
    image: gardens,
    cost: 4,
} as Card

export const Harbinger = {
    set: "base",
    name: "Harbinger",
    cardTypes: ["cantrip"],
    image: harbinger,
    cost: 3,
} as Card

export const Laboratory = {
    set: "base",
    name: "Laboratory",
    cardTypes: ["cantrip", "drawer"],
    image: laboratory,
    cost: 5,
} as Card

export const Library = {
    set: "base",
    name: "Library",
    cardTypes: ["draw-to-x"],
    image: library,
    cost: 5,
} as Card

export const Market = {
    set: "base",
    name: "Market",
    cardTypes: ["cantrip"],
    image: market,
    hasBuy: true,
    cost: 5,
} as Card

export const Merchant = {
    set: "base",
    name: "Merchant",
    cardTypes: ["cantrip"],
    image: merchant,
    cost: 3,
} as Card

export const Militia = {
    set: "base",
    name: "Militia",
    cardTypes: ["attack"],
    image: militia,
    cost: 4,
} as Card

export const Mine = {
    set: "base",
    name: "Mine",
    cardTypes: ["payload"],
    image: mine,
    cost: 5,
} as Card

export const Moat = {
    set: "base",
    name: "Moat",
    cardTypes: ["drawer", "reaction"],
    image: moat,
    cost: 5,
} as Card

export const Moneylender = {
    set: "base",
    name: "Moneylender",
    cardTypes: ["trasher"],
    image: moneylender,
    cost: 4,
    trashType: "treasure",
} as Card

export const Poacher = {
    set: "base",
    name: "Poacher",
    cardTypes: ["cantrip"],
    image: poacher,
    cost: 4,
} as Card

export const Remodel = {
    set: "base",
    name: "Remodel",
    cardTypes: ["trasher", "payload"],
    image: remodel,
    cost: 4,
} as Card

export const Sentry = {
    set: "base",
    name: "Sentry",
    cardTypes: ["trasher", "cantrip", "sifter"],
    image: sentry,
    cost: 5,
} as Card

export const Smithy = {
    set: "base",
    name: "Smithy",
    cardTypes: ["drawer"],
    image: smithy,
    cost: 4,
} as Card

export const Throne_Room = {
    set: "base",
    name: "Throne_Room",
    cardTypes: ["throne"],
    image: throne_room,
    couldBeVillage: true,
    cost: 4,
} as Card

export const Vassal = {
    set: "base",
    name: "Vassal",
    cardTypes: ["payload"],
    image: vassal,
    cost: 3,
} as Card

export const Village = {
    set: "base",
    name: "Village",
    cardTypes: ["village"],
    image: village,
    cost: 3,
} as Card

export const Witch = {
    set: "base",
    name: "Witch",
    cardTypes: ["drawer", "attack", "junker"],
    image: witch,
    cost: 5,
} as Card

export const Workshop = {
    set: "base",
    name: "Workshop",
    cardTypes: ["gainer", "payload"],
    image: workshop,
    cost: 3,
} as Card

export const baseCards: Card[] = [
    Artisan,
    Bandit,
    Bureaucrat,
    Cellar,
    Chapel,
    Council_Room,
    Festival,
    Gardens,
    Harbinger,
    Laboratory,
    Library,
    Market,
    Merchant,
    Militia,
    Mine,
    Moat,
    Moneylender,
    Poacher,
    Remodel,
    Sentry,
    Smithy,
    Throne_Room,
    Vassal,
    Village,
    Witch,
    Workshop,
  ];


