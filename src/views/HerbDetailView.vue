<!-- src/views/HerbDetailView.vue -->
<template>
    <div class="herb-detail-view">
        <Header />
        <div class="container">
            <HerbDetail :herb="herb" :loading="loading" />
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HerbDetail from "@/components/HerbDetail.vue";
import herbsService from "@/services/herbsService";

export default {
    name: "HerbDetailView",
    components: {
        Header,
        HerbDetail,
    },
    data() {
        return {
            herb: null,
            loading: true,
        };
    },
    async created() {
        const id = this.$route.params.id;
        await this.fetchHerb(id);
        this.loading = false;
    },
    watch: {
        "$route.params.id": async function (newId) {
            this.loading = true;
            await this.fetchHerb(newId);
            this.loading = false;
        },
    },
    methods: {
        async fetchHerb(id) {
            try {
                const response = await herbsService.getHerbById(id);
                this.herb = response.data;
            } catch (error) {
                console.error("Error fetching herb:", error);
                // ข้อมูลสำรองกรณีที่ API ไม่ทำงาน
                this.herb = this.getMockHerb(id);
            }
        },
        getMockHerb(id) {
            // ข้อมูลสำรองสำหรับการพัฒนา
            const mockHerbs = {
                1: {
                    ID: 1,
                    Name: "ยาไพล",
                    ScientificName: "Zingiber cassumunar Roxb.",
                    Description: "น้ำมันหอมระเหยจากเหง้าไพลมีสารออกฤทธิ์ที่ช่วยลดการอักเสบและบรรเทาอาการปวด จึงนิยมใช้เป็นยาทาภายนอกสำหรับอาการปวดเมื่อยกล้ามเนื้อ ข้อต่อ และเคล็ดขัดยอก",
                    Benefits: "ลดการอักเสบของกล้ามเนื้อ ปวดข้อ",
                    Usage: "ทาและถูเบา ๆ วันละ 2 - 3 ครั้ง บริเวณที่มีอาการปวดเมื่อย",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B9%84%E0%B8%9E%E0%B8%A5.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                2: {
                    ID: 2,
                    Name: "เถาวัลย์เปรียง",
                    ScientificName: "Derris scandens Benth.",
                    Description: "สารสกัดจากเถาวัลย์เปรียงมีสารกลุ่มไอโซฟลาโวน (isoflavone) ซึ่งมีฤทธิ์ต้านการอักเสบและบรรเทาอาการปวด คล้ายกับยาแผนปัจจุบันกลุ่มยาต้านอักเสบที่ไม่ใช่สเตียรอยด์ (NSAIDs)",
                    Benefits: "บรรเทาอาการปวดกล้ามเนื้อ ลดการอักเสบของกล้ามเนื้อ",
                    Usage: "รับประทานครั้งละ 1 แคปซูล วันละ 3 ครั้ง หลังอาหาร (ทันที) เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B9%80%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%A5%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%87.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                3: {
                    ID: 3,
                    Name: "ยาประคบ",
                    ScientificName: "Herbal Compress Ball",
                    Description: "ลูกประคบสมุนไพรเป็นภูมิปัญญาไทยที่ใช้ความร้อนและสรรพคุณของสมุนไพรหลายชนิด เช่น ไพล ขมิ้นชัน ตะไคร้ เพื่อช่วยกระตุ้นการไหลเวียนโลหิต คลายกล้ามเนื้อ และลดอาการปวดบวม",
                    Benefits: "บรรเทาอาการปวดเมื่อย ลดการอักเสบ บวม",
                    Usage: "นึ่งลูกประคบให้ร้อน แล้วประคบบริเวณที่มีอาการปวด",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%9A.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                4: {
                    ID: 4,
                    Name: "ยาสหัศธารา",
                    ScientificName: "Sahatsatara Formula",
                    Description: "ตำรับยาสมุนไพรแผนไทย ประกอบด้วยสมุนไพรหลายชนิด มีสรรพคุณช่วยขับลมในเส้น แก้ปวดเมื่อยตามร่างกาย ปวดหลัง ปวดเอว และบรรเทาอาการปวดจากข้อเข่าเสื่อม",
                    Benefits: "บรรเทาอาการปวดกล้ามเนื้อ บรรเทาอาการของโรคข้อเข่าเสื่อม",
                    Usage: "รับประทานครั้งละ 2 แคปซูล วันละ 3 ครั้ง หลังอาหาร เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%AB%E0%B8%B1%E0%B8%A8%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%B2.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                6: {
                    ID: 6,
                    Name: "ฟ้าทะลายโจร",
                    ScientificName: "Andrographis paniculata (Burm.f.) Nees",
                    Description: "มีสารสำคัญคือ แอนโดรกราโฟไลด์ (Andrographolide) ซึ่งมีฤทธิ์ต้านการอักเสบ ต้านไวรัส และลดไข้ จึงนิยมใช้บรรเทาอาการของโรคหวัด เช่น เจ็บคอ น้ำมูกไหล และเป็นไข้",
                    Benefits: "บรรเทาอาการของโรคหวัด (common cold) เช่น เจ็บคอ",
                    Usage: "รับประทานครั้งละ 1-2 แคปซูล วันละ 3 ครั้ง หลังอาหาร เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B0%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%82%E0%B8%88%E0%B8%A3.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                7: {
                    ID: 7,
                    Name: "ยาแก้ไอผสมมะขามป้อม",
                    ScientificName: "Emblic Cough Mixture",
                    Description: "มะขามป้อมมีวิตามินซีสูงและสารกลุ่มแทนนิน ซึ่งมีสรรพคุณช่วยบรรเทาอาการไอ ขับเสมหะ และทำให้ชุ่มคอ จึงเป็นส่วนประกอบหลักในยาแก้ไอแผนโบราณ",
                    Benefits: "บรรเทาอาการไอขับเสมหะ",
                    Usage: "จิบเมื่อมีอาการไอทุก 4 ชั่วโมง",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B9%89%E0%B9%84%E0%B8%AD%E0%B8%A1%E0%B8%B0%E0%B8%82%E0%B8%B2%E0%B8%A1%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%A1.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                8: {
                    ID: 8,
                    Name: "ยาประสะมะแว้ง",
                    ScientificName: "Prasa Mawaeng Formula",
                    Description: "เป็นยาอมที่ประกอบด้วยลูกมะแว้งและสมุนไพรอื่นๆ มีรสขมอมเปรี้ยว ช่วยกระตุ้นการหลั่งน้ำลาย ทำให้ชุ่มคอ และลดอาการระคายคออันเป็นสาเหตุของอาการไอ",
                    Benefits: "บรรเทาอาการไอ ขับเสมหะ ชุ่มคอ",
                    Usage: "อม 1-2 เม็ด เมื่อมีอาการไอ",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%AD%E0%B8%A1%E0%B8%A1%E0%B8%B0%E0%B9%81%E0%B8%A7%E0%B9%89%E0%B8%87.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                9: {
                    ID: 9,
                    Name: "ยาธาตุอบเชย",
                    ScientificName: "Cinnamon Mixture",
                    Description: "อบเชยเป็นสมุนไพรที่มีกลิ่นหอมและมีฤทธิ์ขับลม บำรุงธาตุ ช่วยแก้ปัญหาลมในกระเพาะอาหารและลำไส้ จึงช่วยบรรเทาอาการท้องอืด ท้องเฟ้อ และแน่นจุกเสียดได้",
                    Benefits: "บรรเทาอาการท้องอืด ท้องเฟ้อ และแน่นจุกเสียด",
                    Usage: "รับประทานครั้งละ 1-2 ช้อนโต๊ะ วันละ 3 ครั้ง หลังอาหาร เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%8A%E0%B8%A2.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                10: {
                    ID: 10,
                    Name: "ขมิ้นชัน",
                    ScientificName: "Curcuma longa L.",
                    Description: "สารสำคัญในขมิ้นชันคือ เคอร์คิวมิน (Curcumin) ซึ่งมีฤทธิ์ต้านการอักเสบและช่วยขับลม จึงสามารถบรรเทาอาการแผลในกระเพาะอาหารและอาการกรดไหลย้อน รวมถึงอาการท้องอืดท้องเฟ้อ",
                    Benefits: "บรรเทาอาการแน่น จุกเสียด ท้องอืด ท้องเฟ้อ",
                    Usage: "รับประทานครั้งละ 1 แคปซูล วันละ 4 ครั้ง หลังอาหาร เช้า กลางวัน เย็น และก่อนนอน",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%82%E0%B8%A1%E0%B8%B4%E0%B9%89%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%84%E0%B8%9B%E0%B8%8B%E0%B8%B9%E0%B8%A5.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                11: {
                    ID: 11,
                    Name: "มะขามแขก",
                    ScientificName: "Senna alexandrina Mill.",
                    Description: "ใบและฝักของมะขามแขกมีสารแอนทราควิโนน (Anthraquinone) ซึ่งมีฤทธิ์กระตุ้นการบีบตัวของลำไส้ใหญ่ ช่วยให้ถ่ายง่ายขึ้น จึงใช้เป็นยาระบายสำหรับผู้ที่มีอาการท้องผูก",
                    Benefits: "บรรเทาอาการท้องผูก",
                    Usage: "รับประทานครั้งละ 1-2 แคปซูล วันละ 1 ครั้ง ก่อนนอน",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B9%83%E0%B8%9A%E0%B8%A1%E0%B8%B0%E0%B8%82%E0%B8%B2%E0%B8%A1%E0%B9%81%E0%B8%82%E0%B8%81.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                12: {
                    ID: 12,
                    Name: "ยาผสมเพชรสังฆาต",
                    ScientificName: "Cissus quadrangularis L. Formula",
                    Description: "เพชรสังฆาตมีสรรพคุณทำให้หลอดเลือดดำบริเวณทวารหนักหดตัว และช่วยลดการอักเสบของเส้นเลือด จึงช่วยบรรเทาอาการและลดขนาดของริดสีดวงทวารหนักได้",
                    Benefits: "รักษาริดสีดวงทวารหนัก",
                    Usage: "รับประทานครั้งละ 1-2 แคปซูล วันละ 3 ครั้ง หลังอาหาร เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B9%81%E0%B8%84%E0%B8%9B%E0%B8%8B%E0%B8%B9%E0%B8%A5%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%86%E0%B8%B2%E0%B8%95.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                13: {
                    ID: 13,
                    Name: "ขิง",
                    ScientificName: "Zingiber officinale Roscoe",
                    Description: "ขิงมีสารจินเจอร์รอล (Gingerol) ซึ่งมีฤทธิ์อุ่น ช่วยในการขับลม บรรเทาอาการท้องอืด และมีผลต่อระบบประสาทที่ช่วยลดอาการคลื่นไส้อาเจียนจากการเมารถ เมาเรือ หรืออาการแพ้ท้อง",
                    Benefits: "บรรเทาอาการคลื่นไส้อาเจียน อืดแน่นท้อง",
                    Usage: "รับประทานครั้งละ 1 แคปซูล วันละ 3 ครั้ง ก่อนอาหาร เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%82%E0%B8%B4%E0%B8%87.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                17: {
                    ID: 17,
                    Name: "ยาพญายอ",
                    ScientificName: "Clinacanthus nutans (Burm.f.) Lindau",
                    Description: "สารสกัดจากใบพญายอ (หรือเสลดพังพอนตัวเมีย) มีฤทธิ์ต้านเชื้อไวรัสเริม (Herpes simplex) และงูสวัด (Varicella-zoster) จึงใช้เป็นยาทาภายนอกเพื่อบรรเทาอาการและลดการอักเสบของตุ่มน้ำใส",
                    Benefits: "บรรเทาอาการของเริมและงูสวัด",
                    Usage: "ทาบริเวณที่เป็น วันละ 5 ครั้ง",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%9E%E0%B8%8D%E0%B8%B2%E0%B8%A2%E0%B8%AD.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                19: {
                    ID: 19,
                    Name: "ยาแก้ลมแก้เส้น",
                    ScientificName: "Kae Lom Kae Sen Formula",
                    Description: "เป็นตำรับยาไทยที่ช่วยบำรุงและปรับสมดุลของธาตุลมในร่างกาย ช่วยให้เลือดลมไหลเวียนสะดวกขึ้น จึงบรรเทาอาการปวดเมื่อยกล้ามเนื้อ และอาการชาตามปลายมือปลายเท้า",
                    Benefits: "บรรเทาอาการปวดเมื่อยกล้ามเนื้อ ลดอาการมือเท้าชาและอ่อนแรง",
                    Usage: "รับประทานครั้งละ 2 แคปซูล วันละ 3 ครั้ง ก่อนอาหาร เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A5%E0%B8%A1%E0%B9%81%E0%B8%81%E0%B9%89%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                21: {
                    ID: 21,
                    Name: "ยาศุขไสยาศน์",
                    ScientificName: "Suk Sai Yat Formula",
                    Description: "ตำรับยาที่ช่วยผ่อนคลายความตึงเครียดของระบบประสาทและกล้ามเนื้อ ทำให้จิตใจสงบลง จึงช่วยให้นอนหลับได้ง่ายและสนิทยิ่งขึ้น นอกจากนี้ยังช่วยกระตุ้นความอยากอาหารได้อีกด้วย",
                    Benefits: "ช่วยให้นอนหลับและเจริญอาหาร",
                    Usage: "รับประทานครั้งละ 1-2 แคปซูล วันละ 1 ครั้ง ก่อนนอน",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B8%E0%B8%82%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%99%E0%B9%8C.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                27: {
                    ID: 27,
                    Name: "ยาหอมเทพจิตร",
                    ScientificName: "Yahom Thepajit Formula",
                    Description: "เป็นยาหอมตำรับไทย ประกอบด้วยสมุนไพรที่มีกลิ่นหอมหลายชนิด ช่วยบำรุงหัวใจและระบบไหลเวียนโลหิต ใช้ดมหรือรับประทานเพื่อบรรเทาอาการหน้ามืด วิงเวียนศีรษะ และอาการใจสั่น",
                    Benefits: "บรรเทาอาการวิงเวียนศีรษะ หน้ามืด ตาลาย",
                    Usage: "อมครั้งละ 1-2 เม็ด เมื่อมีอาการ",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A2%E0%B8%B2%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A3.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
                30: {
                    ID: 30,
                    Name: "มะระขี้นก",
                    ScientificName: "Momordica charantia L.",
                    Description: "มะระขี้นกมีสารที่ออกฤทธิ์คล้ายอินซูลิน (insulin-like compound) ชื่อว่า ชาแรนติน (Charantin) ซึ่งมีส่วนช่วยในการลดระดับน้ำตาลในเลือดของผู้ป่วยเบาหวานระยะเริ่มต้น นอกจากนี้ยังมีฤทธิ์เย็น ช่วยบรรเทาอาการร้อนใน",
                    Benefits: "ช่วยลดน้ำตาลในเลือด บรรเทาอาการร้อนใน",
                    Usage: "รับประทานครั้งละ 1 แคปซูล วันละ 3 ครั้ง หลังอาหาร เช้า กลางวัน เย็น",
                    ImageUrl: "https://raw.githubusercontent.com/pharmacist-sabot/herbs-app-images/refs/heads/main/%E0%B8%A1%E0%B8%B0%E0%B8%A3%E0%B8%B0%E0%B8%82%E0%B8%B5%E0%B9%89%E0%B8%99%E0%B8%81.png",
                    Category: "มีใช้ในโรงพยาบาล",
                },
            };

            return mockHerbs[id] || null;
        },
    },
};
</script>

<style scoped>
.herb-detail-view {
    min-height: 100vh;
    padding-bottom: 40px;
    flex-grow: 1;
}
</style>
