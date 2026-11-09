"use strict";

const { test, describe } = require("node:test");
const assert = require("node:assert/strict");
const passwordEncrypt = require("../src/helpers/passwordEncrypt");
const Reservation = require("../src/models/reservationModel");
const Admin = require("../src/models/adminModel");

describe("Erin's Restaurant Backend Unit Tests", () => {
  test("passwordEncrypt produces deterministic 64-char hex PBKDF2-SHA512 digest", () => {
    const hash1 = passwordEncrypt("TestPassword123!");
    const hash2 = passwordEncrypt("TestPassword123!");
    const differentHash = passwordEncrypt("AnotherPassword456!");

    assert.equal(typeof hash1, "string");
    assert.equal(hash1.length, 64);
    assert.equal(hash1, hash2);
    assert.notEqual(hash1, differentHash);
  });

  test("Reservation Mongoose model validates required fields", () => {
    const emptyReservation = new Reservation({});
    const err = emptyReservation.validateSync();
    assert.ok(err, "Expected validation error for empty reservation");
    for (const field of ["email", "phone", "full_name", "guests", "timeSlot", "date", "qrCode"]) {
      assert.ok(err.errors[field], `Expected validation error on field: ${field}`);
    }

    const validReservation = new Reservation({
      email: "guest@example.com",
      phone: "0851234567",
      full_name: "Jane Doe",
      guests: 4,
      timeSlot: "19:00",
      date: "2026-12-01",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=test",
    });
    const validErr = validReservation.validateSync();
    assert.equal(validErr, undefined);
  });

  test("Admin Mongoose model defaults isConfirmedAdmin to false", () => {
    const admin = new Admin({
      email: "admin@example.com",
      password: passwordEncrypt("AdminSecret123"),
      first_name: "Umut",
      last_name: "Pehlivan",
    });
    const err = admin.validateSync();
    assert.equal(err, undefined);
    assert.equal(admin.isConfirmedAdmin, false);
  });
});
