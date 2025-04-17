import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold text-indigo-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Школа Будущего Навыка: Игровой Формат
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Открой для себя обучение через игру — развивайся, играя!
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl px-6 py-3 text-lg">
            Начать обучение
          </Button>
          <Button variant="outline" className="rounded-2xl px-6 py-3 text-lg">
            Подробнее
          </Button>
        </motion.div>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          {
            title: "Интерактивные курсы",
            text: "Учись в формате квестов, мини-игр и симуляций."
          },
          {
            title: "Навыки будущего",
            text: "Развивай креативность, критическое мышление и командную работу."
          },
          {
            title: "Гибкость и доступность",
            text: "Обучайся в любое время и в любом месте."
          },
          {
            title: "Сообщество единомышленников",
            text: "Вдохновляйся и делись опытом с другими участниками."
          }
        ].map((card, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
