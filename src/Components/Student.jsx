import React from "react";
import './Navbar.css'

const Student = () => {
    return (
        <>
            <div className="flex">

                <table>
                    <thead>

                        <tr>
                            <th>S. no.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>1</td>
                            <td>Karan</td>
                            <td>20</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Arpitha</td>
                            <td>24</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bhalaji</td>
                            <td>25</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Chethan</td>
                            <td>26</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Arun</td>
                            <td>22</td>
                            <td>Male</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Student;