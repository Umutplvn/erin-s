const cron = require("node-cron");
const Reservation = require("../models/reservationModel");

const deletePastReservations = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("Cron job çalışıyor: Geçmiş rezervasyonlar temizleniyor...");
    try {
      const today = new Date().setHours(0, 0, 0, 0);
      const result = await Reservation.deleteMany({ date: { $lt: today } });
      console.log(`${result.deletedCount} geçmiş rezervasyon başarıyla silindi.`);
    } catch (err) {
      console.error("Cron job sırasında hata oluştu:", err);
    }
  });
};

module.exports = { deletePastReservations };
