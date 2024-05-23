<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

  function show(){
    router.push('/carts/show')
  }
</script>

<template>
  <div class="bg-white border border-gray-200 shadow-sm dark:border-gray-700 dark:bg-[#2F3349FF] mt-2">
    <div class="grid gap-4 rounded-lg xl:grid-cols-2 2xl:grid-cols-3">
      <div class="bg-white table-height table-wrp block rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 dark:bg-transparent">
        <table class="w-full text-sm text-left rtl:text-right rounded-lg dark:text-gray-400">
          <thead class="sticky top-[49px] backdrop-blur-3xl z-50 bg-indigo-400 dark:bg-[#6D609B49] text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" data-tooltip-target="tooltip-top1" data-tooltip-placement="top"
                class="p-2 border border-gray-700 text-xs font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              <div id="tooltip-top1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              ID

            </th>
            <th scope="col" data-tooltip-target="tooltip-top2" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              <div id="tooltip-top2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              Источник содержании
            </th>
            <th scope="col" data-tooltip-target="tooltip-top3" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">

              <div id="tooltip-top3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              Лицевой счет в ДФО
            </th>
            <th scope="col" data-tooltip-target="tooltip-top4" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">

              <div id="tooltip-top4" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              № штата

            </th>
            <th scope="col" data-tooltip-target="tooltip-top5" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">

              <div id="tooltip-top5" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              Подразделение

            </th>
            <th scope="col" data-tooltip-target="tooltip-top6" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">

              <div id="tooltip-top6" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              Должность

            </th>
            <th scope="col" data-tooltip-target="tooltip-top7" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">

              <div id="tooltip-top7" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              Воинская часть

            </th>
            <th scope="col" data-tooltip-target="tooltip-top8" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">

              <div id="tooltip-top8" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              Военный округ

            </th>
            <th scope="col" data-tooltip-target="tooltip-top9" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">

              <div id="tooltip-top9" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              ПИНФЛ

            </th>
            <th scope="col" data-tooltip-target="tooltip-top10" data-tooltip-placement="top"
                class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white ">

              <div id="tooltip-top10" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-[#6366f1]">

                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              Присвоенные воинской звания

            </th>
            <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              Ф.И.О.

            </th>
            <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              Воинской звания по штатау

            </th>
            <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              "Паспорт (ID-карта)"

            </th>
            <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              Личные номер

            </th>
            <th scope="col" class="p-2 text-xs border border-gray-700 font-medium tracking-wider text-left text-dark uppercase dark:text-white">
              Дата рождения

            </th>
          </tr>
          </thead>
          <tbody class="dark:bg-[#2F3349FF] odd:bg-white odd:dark:bg-[#2F3349FF] even:bg-[#2F3349FF] even:dark:bg-[#2F3349FF] border-b dark:border-gray-700">
          <tr @click="show" class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td class="p-2 text-sm font-normal break-all text-black whitespace-wrap border border-gray-700 dark:text-white">
              <span class="font-semibold">159 </span>
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              Бюджет
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              1100
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              00/000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Финансовая служба
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Начальник финансовой службы
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              00000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Ташкентский военный округ
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              33011956520018
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              подполковник
            </td>
            <td class="p-2 text-sm capitalize lowercase  font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              DORSH BOGDAN VYACHESLAVOVICH
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              полковник
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              28 лет
              30.11.1995
            </td>
          </tr>

          <tr @click="show" class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td class="p-2 text-sm font-normal break-all text-black whitespace-wrap border border-gray-700 dark:text-white">
              <span class="font-semibold">160 </span>
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              Бюджет
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              1100
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              00/000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Финансовая служба
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Начальник финансовой службы
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              00000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Ташкентский военный округ
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              33011956520018
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              подполковник
            </td>
            <td class="p-2 text-sm capitalize lowercase  font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              DORSH BOGDAN VYACHESLAVOVICH
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              полковник
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              28 лет
              30.11.1995
            </td>
          </tr>

          <tr @click="show" class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td class="p-2 text-sm font-normal break-all text-black whitespace-wrap border border-gray-700 dark:text-white">
              <span class="font-semibold">161 </span>
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              Бюджет
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              1100
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              00/000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Финансовая служба
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Начальник финансовой службы
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              00000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Ташкентский военный округ
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              33011956520018
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              подполковник
            </td>
            <td class="p-2 text-sm capitalize lowercase  font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              DORSH BOGDAN VYACHESLAVOVICH
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              полковник
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              28 лет
              30.11.1995
            </td>
          </tr>

          <tr @click="show" class="bg-gray-100  hover:!bg-violet-600 active:!bg-violet-700 focus:!outline-none focus:!ring focus:ring-violet-300  cursor-pointer odd:bg-white odd:dark:bg-[#2F3349FF] even:dark:bg-[#2f2b3d49] even:dark:bg-[#2f2b3d49] border-b dark:border-gray-600">
            <td class="p-2 text-sm font-normal  text-black whitespace-wrap border border-gray-700 dark:text-white">
              <span class="font-semibold">162 </span>
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              Бюджет
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              1100
            </td>
            <td class="p-2 text-sm font-normal break-all text-black font-medium border border-gray-700 whitespace-wrap dark:text-white">
              00/000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Финансовая служба
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Начальник финансовой службы
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              00000
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              Ташкентский военный округ
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              33011956520018
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              подполковник
            </td>
            <td class="p-2 text-sm capitalize lowercase  font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              DORSH BOGDAN VYACHESLAVOVICH
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              полковник
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              AD1206602
            </td>
            <td class="p-2 text-sm font-normal break-all text-gray-900 whitespace-wrap border border-gray-700 dark:text-white">
              28 лет
              30.11.1995
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
