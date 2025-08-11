/**
 * MIT License
 *
 * Copyright (c) 2025 Qiu Yixiang
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// Import for the components
import Card from "@/components/ui/Card";
import Paragraph from "@/components/ui/Paragraph";
import { Title } from "@/components/ui/Title";
import UnorderedList from "@/components/ui/UnorderedList";
import { LinkGame, LinkReading } from "@/components/ui/Link";

import { _MongoDBPart, _PostgreSQLPart } from "./_Part";

const SQLDatabaseSection = (): React.ReactNode => {
    const _Intro = (): React.ReactNode => {
        return (
            <div>
                <Title>SQL Database</Title>
                <Paragraph>
                    SQL is a Structured Query Language that is used to manage
                    relational databases. It is a standard language for managing
                    relational databases.
                </Paragraph>
                <Paragraph>
                    Firstly learn the general pattern of SQL database. It is
                    good option to pick an interactive website like{" "}
                    <strong>SQLBolt</strong> to learn the SQL.
                </Paragraph>
                <UnorderedList>
                    <li>
                        <LinkGame href="https://sqlbolt.com/">SQLBolt</LinkGame>
                    </li>
                    <li>
                        <LinkReading href="https://www.amazon.ca/SQL-Minutes-Sams-Teach-Yourself/dp/0135182794/ref=sr_1_7?crid=1F7GK3UIHLAWE&dib=eyJ2IjoiMSJ9.j243ax-ZZAwsGoQeEud7RGXUQd_x6dK-xxHjnUlGuuBXIffagIZomACzVmuKyvWN8tN77RFD_t1XamM2coB9paTVo71YFVdJwYqEGoI8sDSlQ9YZTAsxWDe53RjZV2bpCga-88rBTKR_ZF4tkAmZP9SOYWmgLzPw5y_QCaoN-AQPWqD-cp2zhuqY2GVSb2IoocSkdxSiUFs6rcni2yRg8IU6_6O0G0fCu90blOtR5mvrDrVm-KU0fIgqMehJBZhKsNnaTE_b0K2XV3UTAJdyRNQ6t_A9lt9MfO6Y1SbpZac.QfMVE24QPdTafuQBl3Tbq9RmyJaZFuXX_0N77LT74r0&dib_tag=se&keywords=sql&qid=1754951499&sprefix=sql%2Caps%2C113&sr=8-7">
                            SQL in 10 minutes a day
                        </LinkReading>
                    </li>
                </UnorderedList>
                <Paragraph>
                    After you have a basic understanding of SQL, you can start
                    to learn the specific SQL database or learn more advanced
                    data base pattern.
                </Paragraph>
            </div>
        );
    };
    return (
        <Card>
            <_Intro />
            <_PostgreSQLPart />
        </Card>
    );
};

const NoSQLDatabaseSection = (): React.ReactNode => {
    const _Intro = (): React.ReactNode => {
        return (
            <div>
                <Title>NoSQL Database</Title>
                <Paragraph>
                    NoSQL is a non-relational database that is used to manage
                    non-relational databases like MongoDB, Cassandra, and etc.
                    Which is more flexible and easy to use.
                </Paragraph>
            </div>
        );
    };
    return (
        <Card>
            <_Intro />
            <_MongoDBPart />
        </Card>
    );
};

const IntroSection = (): React.ReactNode => {
    return (
        <Card>
            <div>
                <Title>Database Roadmap</Title>
                <Paragraph>
                    Database is the core of the backend development. It is used
                    to store and retrieve data from the database. Make the data
                    persistent and accessible.
                </Paragraph>
                <Paragraph>
                    The roadmap is divided into two parts: SQL and NoSQL. You
                    can choose to use SQL or NoSQL as your database. Like for
                    use <strong>MongoDB</strong> as NoSQL database, and use{" "}
                    <strong>MySQL</strong> or <strong>PostgreSQL</strong> as SQL
                    database.
                </Paragraph>
                <Paragraph>
                    You don't need to follow exactly the same order - you can
                    skip topics that you already know.
                </Paragraph>
            </div>
        </Card>
    );
};

const DataBasePage = (): React.ReactNode => {
    return (
        <div className="flex flex-col gap-8">
            <IntroSection />
            <SQLDatabaseSection />
            <NoSQLDatabaseSection />
        </div>
    );
};

export default DataBasePage;
